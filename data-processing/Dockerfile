# Use a Python base image with pip pre-installed
FROM python:3.9-slim-buster

# Set the working directory
WORKDIR /app

# Copy requirements.txt first for caching
COPY requirements.txt requirements.txt

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Command to run the application
CMD ["python", "data_manager.py"]