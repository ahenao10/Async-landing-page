const API = 'https://yt-api.p.rapidapi.com/channel/videos?id=UCc8o0cT4aD3n1Bw3k5GIdQQ';

const content = null || document.getElementById('content')

const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'cors': 'Access-Control-Allow-Origin',
        'x-rapidapi-key': '4c6fc8673fmsh8af972ce2604c76p12dc1bjsn9baf27844802',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

// (async () => {
//     try {
//         const response = await fetchData(API)
//         const videos = response.data
//         let view = `${videos.map(video => `
//             <div class="group relative">
//                     <div
//                         class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//                         <img src="${video.thumbnail[3].url}" alt="${video.title}" class="w-full">
//                     </div>
//                     <div class="mt-4 flex justify-between">
//                         <h3 class="text-sm text-gray-700">
//                             <span aria-hidden="true" class="absolute inset-0"></span>
//                             ${video.title}
//                         </h3>
//                     </div>
//                 </div>
//                 `).slice(0,4).join('')}`
//         content.innerHTML = view;
//     } catch (error) {
//         console.log(error);
//     }
// })()

(async () => {
    try {
        const response = await fetchData(API)
        const videos = response.data
        videos.slice(0, 4).forEach(video => {
            let divVideo = document.createElement('div');
            divVideo.classList.add('group', 'relative');

            let divImgVideo = document.createElement('div');
            divImgVideo.className = 'w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none';

            let imgVideo = document.createElement('img');
            imgVideo.src = video.thumbnail[3].url;
            imgVideo.alt = video.title;
            imgVideo.className = 'w-full';

            let divTitle = document.createElement('div');
            divTitle.className = 'mt-4 flex justify-between';

            let hTitle = document.createElement('h3');
            hTitle.className = 'text-sm text-white';

            let spanTitle = document.createElement('span');
            spanTitle.setAttribute('aria-hidden', 'true');
            spanTitle.className = 'absolute inset-0';

            hTitle.appendChild(spanTitle);
            hTitle.innerHTML = video.title;
            divTitle.appendChild(hTitle);
            divImgVideo.appendChild(imgVideo);
            divVideo.append(divImgVideo, divTitle);

            content.appendChild(divVideo);
        })

    } catch (error) {
        console.log(error);
    }
})()