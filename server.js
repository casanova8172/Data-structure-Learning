const topics = [
    { name: "Learn The basic of C++", videoId: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee" },
    { name: "Sorting", videoId: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U" },
    { name: "Array", videoId: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" },
    { name: "Binary Search", videoId: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF" },
    { name: "String", videoId: "https://www.youtube.com/playlist?list=PLjeQ9Mb66hM05uqfKysHKi3eA5HhK7QSy" },
    { name: "Linked List", videoId: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rAuz8tVcM0AymmhTRsfaLU" },
    { name: "Stack & Queue", videoId: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTrhXYYtx4z8-u8zA-DzuVsj" },
    { name: "Heap", videoId: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9" },
    { name: "Sliding Window & Two Pointer", videoId: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj" },
    { name: "Greedy Algorithm", videoId: "https://www.youtube.com/playlist?list=PLjeQ9Mb66hM3-awRd9EmL4dEhNc93MG-V" },
    { name: "Bit Manipulation", videoId: "https://www.youtube.com/playlist?list=PLLT4EuYB4kIZGBE71Udl0m68uFxRiMhGS" },
    { name: "Recursion", videoId: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" },
    { name: "Binary Tree and BST", videoId: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk" },
    { name: "Graphs", videoId: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" },
    { name: "Dynamic Programming", videoId: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" },
    // Add more topics here
];

const topicsContainer = document.getElementById('topics');
const videoPlayerContainer = document.getElementById('videoPlayer');

function initializeTopics() {
    topics.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.classList.add('topic');
        topicElement.textContent = topic.name;
        topicElement.addEventListener('click', () => {
            showVideo(topic.videoId);
            highlightTopic(topicElement);
        });
        topicsContainer.appendChild(topicElement);
    });
}

function showVideo(videoId) {
    videoPlayerContainer.innerHTML = `<iframe width="100%" height="400px" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
}

function highlightTopic(topicElement) {
    const allTopics = document.querySelectorAll('.topic');
    allTopics.forEach(element => {
        element.classList.remove('selected');
    });
    topicElement.classList.add('selected');
}

initializeTopics();
