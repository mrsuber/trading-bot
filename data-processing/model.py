import pandas as pd
from sklearn.linear_model import LinearRegression

class Model:
  def __init__(self):
    self.model = LinearRegression()

  def train(self, X_train, y_train):
    self.model.fit(X_train, y_train)

  def predict(self, X_test):
    return self.model.predict(X_test)