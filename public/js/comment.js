const newFormHandler = async (event) => {
    event.preventDefault();
  //Collect comment values
    const text = document.querySelector('#comment-text').value.trim();
    const project_id = document.querySelector('#post_id').value.trim();
// Post request to API endpoint
    if (text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ project_id, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create a Comment');
      }
    }
  };


  //Event listener for comment post
  document
    .querySelector('#comment-post')
    .addEventListener('submit', newFormHandler);
  