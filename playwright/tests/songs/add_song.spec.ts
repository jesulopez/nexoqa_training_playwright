import {test, expect} from '@playwright/test'
import { HomePage } from '../page_objects/home_page';
import { AddSongPage } from '../page_objects/add_song_page';

test('Add new song', async({page}) => {
    await page.goto('http://172.18.10.43:8080/');
    var homePage: HomePage = new HomePage(page);
    await homePage.addButton.click();
    var addSongPage: AddSongPage = new AddSongPage(page);
    await addSongPage.fillSong('Song 1', 'Artist 1', 'Blues', 'Sphere Universe', 'https://pics.filmaffinity.com/Coldplay_Music_of_the_Spheres_Live_at_River_Plate-754593988-large.jpg', 'https://www.youtube.com/watch?v=it1hD1zGgDk', 'tab 1', 'lyrics lyrics lyrics lyrics lyrics lyrics ' );
    await addSongPage.button.click();
    await expect(homePage.songs.last()).toContainText('Song 1');
});