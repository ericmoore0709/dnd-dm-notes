#!/bin/bash
set -e

# Ensure psql stops on errors and uses your env vars
psql -v ON_ERROR_STOP=1 \
  --username "$POSTGRES_USER" \
  --dbname "$POSTGRES_DB" \
  -f /docker-entrypoint-initdb.d/schema.sql

psql -v ON_ERROR_STOP=1 \
  --username "$POSTGRES_USER" \
  --dbname "$POSTGRES_DB" \
  -f /docker-entrypoint-initdb.d/seed.sql