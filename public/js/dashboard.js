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

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

  
  const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id-u')) {
      const id = event.target.getAttribute('data-id-u');
  
      try {
        const response = await fetch(`/update/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const postData = await response.json();
          const post = postData.post;
  
          editMode = true;
  
          // Set editMode to true to display the edit form
          document.querySelector('.edit-post-form').style.display = 'block';
  
          // Populate the edit form with post data
          document.querySelector('#edit-post-title').value = post.title;
          document.querySelector('#edit-post-desc').value = post.body;
        } else {
          console.error(`Failed to retrieve post for editing. Status code: ${response.status}`);
        }
      } catch (error) {
        console.error('An error occurred while fetching/editing the post:', error);
      }
    }
  };
  



// var editMode = false;

// const editButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id-u')) {
//     const id = event.target.getAttribute('data-id-u');

//     try {
//       const response = await fetch(`/edit/${id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
      
//       });

//       if (response.ok) {
//         const postData = await response.json();
//         const post = postData.post;

//        editMode = true;

//         // Set editMode to true to display the edit form
//         document.querySelector('.edit-post-form').style.display = 'block';

//         // Populate the edit form with post data
//         document.querySelector('#edit-post-title').value = post.title;
//         document.querySelector('#edit-post-desc').value = post.body;
//       } else {
//         console.error(`Failed to retrieve post for editing. Status code: ${response.status}`);
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching/editing the post:', error);
//     }
//   }
// };




// const editFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#edit-post-title').value.trim();
//   const body = document.querySelector('#edit-post-desc').value.trim();

//   if (title && body) {
//     const id = event.target.getAttribute('data-id-u'); // Get the post ID from the form

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, body }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       // Redirect to the dashboard after successful update
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to update post');
//     }
//   }
// };

// document
//   .querySelector('.post-list-edit')
//   .addEventListener('click', editButtonHandler);

// document
//   .querySelector('.edit-post-form')
//   .addEventListener('click', editFormHandler);
