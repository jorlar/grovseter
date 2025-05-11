/*
  # Create booking system tables

  1. New Tables
    - `cabins`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `max_persons` (integer)
      - `price_per_night` (integer)
      - `size_m2` (integer)
      - `created_at` (timestamp)
      
    - `bookings`
      - `id` (uuid, primary key)
      - `cabin_id` (uuid, foreign key)
      - `check_in` (date)
      - `check_out` (date)
      - `adults` (integer)
      - `children` (integer)
      - `total_price` (integer)
      - `user_id` (uuid, foreign key)
      - `created_at` (timestamp)
      
    - `cabin_facilities`
      - `id` (uuid, primary key)
      - `cabin_id` (uuid, foreign key)
      - `name` (text)
      - `icon` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create cabins table
CREATE TABLE IF NOT EXISTS cabins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  max_persons integer NOT NULL,
  price_per_night integer NOT NULL,
  size_m2 integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cabin_id uuid REFERENCES cabins(id),
  check_in date NOT NULL,
  check_out date NOT NULL,
  adults integer NOT NULL,
  children integer NOT NULL,
  total_price integer NOT NULL,
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_dates CHECK (check_out > check_in)
);

-- Create cabin facilities table
CREATE TABLE IF NOT EXISTS cabin_facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cabin_id uuid REFERENCES cabins(id),
  name text NOT NULL,
  icon text NOT NULL
);

-- Enable RLS
ALTER TABLE cabins ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE cabin_facilities ENABLE ROW LEVEL SECURITY;

-- Policies for cabins
CREATE POLICY "Cabins are viewable by everyone"
  ON cabins
  FOR SELECT
  TO public
  USING (true);

-- Policies for bookings
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for cabin facilities
CREATE POLICY "Cabin facilities are viewable by everyone"
  ON cabin_facilities
  FOR SELECT
  TO public
  USING (true);