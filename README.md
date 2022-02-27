# Scammer-Detecting-App

## I. Introduction
    A mobile application to help detect SMS scams and frauds using Natural Language Processing model.
<br><br>

## II. Fraud detection flow
    
1. User take a screenshot of possible fraud message
2. The picture is sent to backend server.
3. Sever using OCR to convert image to text.
4. Text file is then parsed to NLP model.
5. Sever send result to user.

<br>

## III. Application features:
1. **Scam Detection**: utilizing AI to detect scam message, dection model is trained on `kaggle SMS spam` dataset (5000 entries), achieve `98%` accuracy on `train,test` split of `80/20`.  
2. **Scammer report**: A list of scammer either by reported or verified detection will be kept in the server.
3. **Scammer warning**: User will be warned about potential scammer if use app's messaging function. On the other hand, a portal to search for scammer by mobile number will also be available.

## IV. Auxiliary requirements:
1. **User privacy**: All sensitive users shall be kept private.
2. **Speed and correctness**: Machine Learning model shall be update regularly.

    So in conclusion, the application will be a shield against potential Scamming SMS. And we also value our custom by promise to provide quality and up to date AI model. On the other hand, all sensitive messages of our users shall be kept cofidentially. And we believe this will provide an effective solution for scamming. Thank you for listening and hope you enjoy it.
