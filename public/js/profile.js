const newFormHandler = async (event) => {
  event.preventDefault();
// Create variables for to write into HTML
  const title = document.querySelector('#project-title').value.trim();
  const text= document.querySelector('#project-text').value.trim();
// Function to get info for blog post
  if (title && text) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ title, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create a Blog Post');
    }
  }
};
// Handler to get post by ID and deleting
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};
// Event listeners for posting and deleting
document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
