const navigation = document.getElementById('navigation'),
    navigationList = document.getElementById('navigation-list'),
    navigationPlayer = document.getElementById('spotify--navigation-player'),
    onlyNavigation = document.getElementById('navigation-state--nav-only'),
    onlyNavigationPlayer = document.getElementById('navigation-state--player-only');

if(onlyNavigation) {
    // show navigation only
    if (navigationPlayer) {
        navigationPlayer.classList.add('hide');
    }
} else if(onlyNavigationPlayer) {
    // show navigation player only
    if (navigation) {
        navigation.classList.add('hide');
    }
} else {
    // show navigation and navigation player
    const navHeight = navigationList.offsetHeight;
    if (navigationPlayer) {
        navigationPlayer.style.bottom = `${navHeight}px`;
    }
}
