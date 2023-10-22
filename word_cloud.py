import pickle                            # open our file
import pandas as pd                      # dataframe stuff
import os
import re

# plotting image with word cloud
from PIL import Image                    # for our images
import numpy as np                       # convert image to np arrays
from wordcloud import WordCloud,ImageColorGenerator,STOPWORDS # generate word cloud
import matplotlib.pyplot as plt          # plotting

# Webscraped file:
indeed_webscraped_data='Indeed_scrape_Oct2020.txt'
indeed_webscr_df=pd.read_pickle(indeed_webscraped_data)
indeed_webscr_df.head()

indeed_webscr_df['Qual_Text'][0]

indeed_webscr_df['skill_matches'].head(10)

cleaned_data=pd.read_pickle('indeed_cleaned_dta.pkl')
cleaned_data.head()


combine_all_wrds=[]
for i in cleaned_data['lemma_wrds']:
#     print(type(i))
#     print(len(i))
    for j in i:
        combine_all_wrds.append(j)
# len(combine_all_wrds)
all_wrds_str=' '.join(combine_all_wrds)

# mask:

# this image is a triangle
img_mask=np.array(Image.open('Slide1.png'))
# img_mask


wc=WordCloud(background_color='black',max_words=850,min_font_size=8,max_font_size=70,
random_state=1,normalize_plurals=True,mask=img_mask)


wc.generate(all_wrds_str)

plt.figure(figsize=(22,11))
plt.imshow(wc,interpolation='bilinear')
plt.title("Indeed Full Text (Triangle)",fontsize=20)
plt.axis("off")
plt.show()

skills=[]
for i in indeed_webscr_df['skill_matches']:
     b_=" ".join(review for review in i)
wc=WordCloud(background_color='black',max_words=30,max_font_size=90,random_state=1,
    mask=img_mask)
wc.generate(b_)
plt.figure(figsize=(22,10))
plt.imshow(wc,interpolation="bilinear")
plt.title("Indeed Job Highlights",fontsize=20)
plt.axis("off")
plt.tight_layout(pad=0)
plt.show()


f={}
for i in cleaned_data['lemma_wrds']:
    for j in i:
#     print(i)
        if j in f:
            f[j]+=1
        else:
            f[j]=1
wrd_freq={k: v for k, v in sorted(f.items(), key=lambda item: item[1],reverse=True)}

# wrd_freq

more_wrd_to_remove=['year','experience','user','employee','type','llc','member','youll',
'various','range','position','end','service','leveljob','wide','card','bring',
'sexual orientation','sexual', 'orientation','veteran','status','employer','year experience',
'due','covid','natural origin','using','u','sexal','sexal orientation',
'sexalorientation','decovid','de covid']

for i in more_wrd_to_remove:
    if i in all_wrds_str:
        revised_wrd_cloud=all_wrds_str.replace(i,'')

wc.generate(revised_wrd_cloud)


plt.figure(figsize=(22,11))
plt.imshow(wc,interpolation="bilinear")
plt.title("Indeed Full Text (triangle with [remove new stopwords])",fontsize=20)
plt.axis("off")
plt.show()


def transform_format(val):
    for i in val:
        if np.all(i) == 0:
            return 255
        else:
            return i

# computer image
img_mask_computer=np.array(Image.open('cartoon_computer.png'))

# If you are calling from anywhere other than CWD than consider something like this:
# img_mask= np.array(Image.open(os.path.join(os.getcwd(),'cartoon_computer.png')))

# transform the matrix
trans_computer_mask = np.ndarray((img_mask_computer.shape[0],
img_mask_computer.shape[1]), np.int32)

for i in range(len(img_mask_computer)):
    trans_computer_mask[i]=list(map(transform_format, img_mask_computer[i]))

wc=WordCloud(background_color='white',max_words=850,max_font_size=70,random_state=1,
mask=trans_computer_mask,min_font_size=8,normalize_plurals=True)

wc.generate(revised_wrd_cloud)


plt.figure(figsize=(22,11))
plt.imshow(wc,interpolation="bilinear")
plt.title("Indeed Full Text (computer image with transform [removed new stopwords])",
          fontsize=20)
plt.axis("off")
plt.show()


img_mask_computer=np.array(Image.open('cartoon_computer.png'))

wc=WordCloud(background_color='grey',max_words=850,max_font_size=70,random_state=1,
mask=img_mask_computer,min_font_size=8,normalize_plurals=True)
wc.generate(revised_wrd_cloud)

colors=wc.recolor(color_func=ImageColorGenerator(img_mask_computer))
plt.figure(figsize=(22,11))
plt.imshow(colors, interpolation="bilinear")
# plt.imshow(wc,interpolation="bilinear")
plt.title("Indeed Full Text (computer image with color mapping [removed new stopwords])",
          fontsize=20)
plt.axis("off")
plt.show()


img_mask_cloud=np.array(Image.open('cloud_img.png'))
wc=WordCloud(background_color='grey',max_words=850,max_font_size=70,random_state=1,
mask=img_mask_cloud,min_font_size=8,normalize_plurals=True)
wc.generate(revised_wrd_cloud)


plt.figure(figsize=(22,11))
plt.imshow(wc,interpolation="bilinear")
plt.title("Indeed Full Text (cloud outline with [removed new stopwords])",fontsize=20)
plt.axis("off")
plt.show()













