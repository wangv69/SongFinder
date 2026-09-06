# SongFinder

Allows the user to reverse lyrics search to find the song they are looking for.

# Installation
Open terminal and run these commands
```
git clone https://github.com/wangv69/SongFinder.git
cd SongFinder/frontend
npm i
npm run dev
```

Then click on the local host link

BEFORE RUNNING THE BACKEND
create a file called .env in the backend folder (cd SongFinder/backend)
then add your Genius API token like this 

*(You can get a free API token by creating a client at https://genius.com/api-clients)*

```
GENIUS_ACCESS_TOKEN=your_token_here
```

In a new terminal run
```
cd SongFinder/backend
python3 -m pip install -r requirements.txt
python3 main.py
```
