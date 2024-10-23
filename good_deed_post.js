  
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            description: formData.get('description'),
            location: formData.get('location'),
            category: formData.get('category'),
            image: formData.get('image') // You may need to handle image uploads differently
        };
    
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            fetchPosts(); // Refresh the post list
            e.target.reset(); // Clear the form
        }
    });
    
            async function fetchPosts() {
        const response = await fetch('http://localhost:5000/posts');
        const posts = await response.json();
        
        const feedElement = document.querySelector('.feed');
        feedElement.innerHTML = '';
        posts.forEach(post => {
            feedElement.innerHTML += `
                <div class="post">
                    <img src="${post.image}" alt="Post Image">
                    <div class="post-info">
                        <div class="likes">
                            <p><strong>User:</strong> Anonymous</p>
                            <p><strong>Description:</strong> ${post.description}</p>
                            <i class="fas fa-heart">views</i> 1.2k
                            <i class="fas fa-comment">comments</i> 150
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
            
            document.addEventListener("DOMContentLoaded", fetchPosts);
            
                document.querySelector('form').addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const data = {
                        description: formData.get('description'),
                        location: formData.get('location'),
                        category: formData.get('category'),
                        image: formData.get('image') // Handle image upload if needed
                    };
                
                    const response = await fetch('http://localhost:5000/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });
                
                    if (response.ok) {
                        fetchPosts(); // Refresh the post list
                        e.target.reset(); // Clear the form
                    }
                });

document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        var preloader = document.getElementById('preloader');
        var content = document.getElementById('content');
        
        // Simulate a delay (e.g., 3 seconds)
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 3000); // Delay time in milliseconds
    }
});
