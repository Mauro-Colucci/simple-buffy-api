const express = require('express');
const cors = require('cors');

const PORT = 8000;
//const PORT = process.env.PORT || 8000;

const app = express();


app.use(cors());

let dataApi = {
    'buffy': {
        'fullName': 'Buffy Anne Summers',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/9/92/C1.jpg/revision/latest/scale-to-width-down/1000?cb=20130212141636',
        'quote': "I'm the thing that monsters have nightmares about.",
        'race': 'Human',
        'subType': 'Slayer'
    },
    'willow': {
        'fullName': 'Willow Danielle Rosenberg',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/2/2d/B4_Willow_02.jpg/revision/latest/scale-to-width-down/1000?cb=20171029050235',
        'quote': "The magicks I used are very powerful. I'm very powerful. And maybe it's not such a good idea for you to piss me off.",
        'race': 'Human',
        'subType': 'Witch'
    },
    'xander': {
        'fullName': 'Alexander LaVelle "Xander" Harris',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/6/6a/S6_058_Xander.jpg/revision/latest?cb=20190430164507',
        'quote': "Seven years… Working with the Slayer. Seeing my friends get more and more powerful… All of them. And I'm the guy who fixes the windows. They'll never know how tough it is, Dawnie. To be the one who isn't chosen, to live so near to the spotlight and never step in it. But I know. I see more than anybody realizes because nobody's watching me.",
        'race': 'Human',
        'subType': 'Great friend'
    },
    'giles': {
        'fullName': 'Rupert Edmund Giles',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/9/97/1rupert_giles.jpg/revision/latest/scale-to-width-down/1000?cb=20210221035237',
        'quote': "Sometimes the most adult thing you can do is... ask for help when you need it.",
        'race': 'Human',
        'subType': 'Watcher'
    },
    'oz': {
        'fullName': 'Daniel "Oz" Osbourne',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/a/aa/Oz_B4-04.jpg/revision/latest/scale-to-width-down/1000?cb=20181016191746',
        'quote': "Well, a gathering is brie, mellow song stylings. Shindig, dip, less mellow song stylings, perhaps a large amount of malt beverage. And hootenanny, well, it's chock full of hoot, just a little bit of nanny",
        'race': 'Werewolf',
        'subType': 'Dingoes eat my baby guitarrist'
    },
    'anya': {
        'fullName': 'Anya Christina Emmanuella Jenkins',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/8/84/B6_Anya_02.jpg/revision/latest/scale-to-width-down/1000?cb=20170717214459',
        'quote': "For a thousand years I wielded the powers of the wish. I brought ruin to the heads of unfaithful men. I brought forth destruction and chaos for the pleasure of the lower beings. I was feared and worshiped across the mortal globe and now I'm stuck at Sunnydale High! Mortal. Child. And I'm flunking math.",
        'race': 'Human',
        'subType': 'former Vengeance demon'
    },
    'tara': {
        'fullName': 'Tara Maclay',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/a/a3/Tara_Maclay9.jpg/revision/latest/scale-to-width-down/1000?cb=20190106065228',
        'quote': "Yeah, you learn her source and we'll introduce her to her insect reflection! That was funny if you've studied Taglarin mystic rites and... are a complete dork...",
        'race': 'Human',
        'subType': 'Witch'
    },
    'dawn': {
        'fullName': 'Dawn Summers',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/6/6c/Dawn_Summers_promo1.jpg/revision/latest/scale-to-width-down/1000?cb=20171028043018',
        'quote': "She still thinks I'm little miss nobody, just her dumb little sister. Boy, is she in for a surprise",
        'race': 'Human',
        'subType': 'Magical construct'
    },
    'spike': {
        'fullName': 'Spike (born William Pratt)',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/9/95/Spike_buffy_season_six_3.jpg/revision/latest?cb=20201122151214',
        'quote': "She still thinks I'm little miss nobody, just her dumb little sister. Boy, is she in for a surprise",
        'race': 'Vampire',
        'subType': 'former ghost'
    },
    'cordelia': {
        'fullName': 'Cordelia Chase',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/f/fd/AS2_017_Cordelia.jpg/revision/latest?cb=20190124021639',
        'quote': "I was a cheerleader, a princess, and a warrior. And I have visions and superpowers and I'm the target of an evil law firm because I've spent the last three months living on a higher plane, fighting for the forces of good, who wage a battle against demons and evilies and squishy bug babies, 'cause all that stuff's real and that's the world I live in.",
        'race': 'Human',
        'subType': 'Higher being'
    },
    'angel': {
        'fullName': 'Angel, born Liam',
        'portrait': 'https://static.wikia.nocookie.net/buffy/images/f/fd/AS2_017_Cordelia.jpg/revision/latest?cb=20190124021639',
        'quote': "...Doesn't matter what you try. Doesn't matter where I am or how badass you think you've become. 'Cause you know what? I'm Angel. I beat the bad guys.",
        'race': 'Vampire',
        'subType': 'Puppet demon (formerly)'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:dataRequest', (request, response) => {
    const dataRequested = request.params.dataRequest.toLowerCase();
    if (dataApi[dataRequested]) {
        response.json(dataApi[dataRequested])
    } else {
        response.json(dataApi["buffy"])
    }
})

app.listen(process.env.PORT || PORT, () => console.log(`listening on PORT ${PORT}`))
