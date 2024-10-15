    const modeSwitch = document.getElementById('darkmode-toggle');
    const label = document.querySelector('label[for="darkmode-toggle"]');
    const nameElement = document.getElementById('name');
    const quoteElement = document.getElementById('quote');
    const profilePic = document.getElementById('profilePic');
    const container = document.querySelector('.container');
    const projectSection = document.getElementById('projectSection'); 
    modeSwitch.addEventListener('change', () => {
      document.body.classList.toggle('anime-mode');
      container.classList.toggle('anime'); 

      if (document.body.classList.contains('anime-mode')) {
        label.textContent = 'Anime'; 
        nameElement.textContent = 'Sunstromium';
        quoteElement.textContent = '"Indian Otaku"';
        profilePic.src = 'https://tse1.mm.bing.net/th?id=OIP.MYwdjrgFU0JwL6ahVIdgZwHaH_&pid=Api&P=0&h=180'; 
        projectSection.style.display = 'none'; 
      } else {
        label.textContent = 'Coding'; 
        nameElement.textContent = 'Bejawada Sai Mahendra';
        quoteElement.textContent = '"I am studying cse and bba at klef and I develop web apps, small Python automations, and AI integrations."';
        profilePic.src = 'https://tse1.mm.bing.net/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&pid=Api&P=0&h=180'; 
        projectSection.style.display = 'flex'; 
      }
    });
