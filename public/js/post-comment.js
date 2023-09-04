console.log(`hi`);
console.log(window)
console.log(window.location)
const postId = window.location.pathname.split("/")[2]
const newCommentHandler = async (event) => {
  
    event.preventDefault();
  
    const body = document.querySelector('#comment-desc').value.trim();

    if (body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body,postId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload()
      } else {
        alert('Failed to create comment');
      }
    }
  };


document
.querySelector('.new-comment-form')
.addEventListener('submit', newCommentHandler);