// Function to format the month and year for headers
function formatMonthYear(date) {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

// Function to organize blog posts by month
function organizeBlogPosts() {
    const blogPostsList = document.querySelector('.blog-posts');
    if (!blogPostsList) return;

    // Get all list items
    const posts = Array.from(blogPostsList.querySelectorAll('li'));
    
    // Group posts by month
    const postsByMonth = new Map();
    
    posts.forEach(post => {
        const timeElement = post.querySelector('time');
        if (!timeElement) return;
        
        const date = new Date(timeElement.getAttribute('datetime'));
        const monthYear = formatMonthYear(date);
        
        if (!postsByMonth.has(monthYear)) {
            postsByMonth.set(monthYear, []);
        }
        postsByMonth.get(monthYear).push(post);
    });

    // Clear the list
    blogPostsList.innerHTML = '';

    // Sort months in descending order (newest first)
    const sortedMonths = Array.from(postsByMonth.keys()).sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateB - dateA;
    });

    // Add posts back with headers
    sortedMonths.forEach(monthYear => {
        // Create and add month header
        const header = document.createElement('h2');
        header.textContent = monthYear;
        header.className = 'month-header';
        blogPostsList.appendChild(header);

        // Add posts for this month
        postsByMonth.get(monthYear).forEach(post => {
            blogPostsList.appendChild(post);
        });
    });
}

// Run the organization when the DOM is loaded
document.addEventListener('DOMContentLoaded', organizeBlogPosts); 