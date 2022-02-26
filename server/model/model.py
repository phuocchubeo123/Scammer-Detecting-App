import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

with open('model.pkl', 'rb') as f:
    MODEL = pickle.load(f)

with open('vectorizer.pkl', 'rb') as f:
    VECTORIZER = pickle.load(f)
