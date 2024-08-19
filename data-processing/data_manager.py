import pandas as pd

class DataManager:
  def __init__(self, data_path):
    self.data_path = data_path

  def load_data(self):
    # Replace with your actual data loading logic
    data = pd.read_csv(self.data_path)
    return data

  def preprocess_data(self, data):
    # Replace with your preprocessing logic
    # Example:
    data = data.fillna(method='ffill')
    return data

  def save_data(self, data, file_path):
    data.to_csv(file_path, index=False)