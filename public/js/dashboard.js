// Function to handle the creation of a new post
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const body = document.querySelector('#post-desc').value.trim();

  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

// Function to handle the deletion of a post
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {

  // Function to handle edit form submission
  const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-post-title').value.trim();
    const body = document.querySelector('#edit-post-desc').value.trim();

    if (title && body) {

      const id = event.currentTarget.getAttribute('data-idU');
      console.log(`Edit button clicked for post ID: ${id}`);


      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }

    }
  };

  // Set up event listener for edit form submission
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
});

// Set up event listeners
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelectorAll('.post-list button').forEach((button) => {
  button.addEventListener('click', delButtonHandler);
});

