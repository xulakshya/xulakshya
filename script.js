document.addEventListener('DOMContentLoaded', () => {
    const memes = document.querySelectorAll('.meme');

    memes.forEach(meme => {
        meme.addEventListener('mouseover', () => {
            meme.style.boxShadow = '0 0 20px 10px rgba(255, 165, 0, 0.8)';
        });

        meme.addEventListener('mouseout', () => {
            meme.style.boxShadow = 'none';
        });
    });
});
