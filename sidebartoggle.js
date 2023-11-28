/*============ SIDEBAR TOGGLE ============*/
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
  
    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }
    function hideSidebar() {
        sidebar.classList.remove('active');
    }
    function handleResize() {
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth >= 590) {
            sidebar.classList.add('active');
        } else {
            hideSidebar();
        }
    }
    function handleScroll() {
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth < 590) {
            hideSidebar();
        }
    }
    sidebarToggle.addEventListener('click', toggleSidebar);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleResize);
  });
  