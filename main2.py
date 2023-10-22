

# Fields for our DF

indeed_spec = ['Company', 'job', 'link', 'Salary', 'Job_Posted_Date']

data = pd.read_csv('Work Styles(csv).csv', encoding='latin-1')

# To display the DataFrame before dropping the specified columns

# Drop the specified columns using iloc
data = data.drop(data.columns[[0, 2, 4, 5] + list(range(7, 14))], axis=1)

# To display the DataFrame after dropping the specified columns
print("DataFrame after dropping the specified columns:")
print(data)


introvert_extrovert_tags= {"Independent":"Introvert",
                           "Cooperative": "Extrovert",
                           "Social Orientation": "Extrovert"}

routine_spontaneous_tags= {"Persistence": "Routine",
                           "Stress Tolerance": "Spontaneous",
                           "Adaptability/Flexibility": "Spontaneous"}

leader_follower_tags= {"Initiative": "Leader",
                       "Leadership": "Leader",
                       "Self-Control": "Follower"}

creative_analytical_tag={"Innovation":"Creative",
                         "Analytical Thinking":"Analytical"}

purpose_money_tags= {"Concern for Others":"Purpose",
                     "Dependability":"Purpose",
                     "Attention to Detail":"Money",
                     "Achievement/Effort": "Money"}


words_to_test = {"Independent", "Cooperative", "Social-Orientation", "Persistence", "Stress", "Tolerance", "Adaptability" ,"Flexibility", "Initiative", "Leadership", "Self-Control", "Innovation", "Analytical Thinking", "Concern for Others", "Dependability", "Attention to Detail","Achievement","Effort" }
print(len(words_to_test))

#finding the synonyms:
def synonym_antonym_extractor(phrase):
    synonyms = []
    antonyms = []
    for word in nltk.word_tokenize(phrase):
        for syn in wordnet.synsets(word):
            for l in syn.lemmas():
                synonyms.append(l.name())
                if l.antonyms():
                    antonyms.append(l.antonyms()[0].name())

    return set(synonyms)
    # print(set(synonyms))
    # print(set(antonyms))


words_and_their_synonyms = {}
for word in words_to_test:
    words_and_their_synonyms[word] = synonym_antonym_extractor(word)
#
#
# print(words_and_their_synonyms)
#
#
# #Feature Engineering
#
#
# #Model Selection
#
#
# #Training the Model
#
# #Evaluation and Validation
#
#
# #Iterative Improvement
#
#
# #Deployment and Integration
#
#
# #create a dictionary with keys and a list of values from above "indeed_posts"
#
#
