/*
    Custom script for the Website
        
    getParameterByName(<'parameter'>):
        get URL Parameters
            
    warp(getParameterByName(<'parameter'>):
        warp / redirect script just bc
        
    'WarpRunner' here!
    'ReplaceLoginNameRunner' here!
*/


/* Custom Functions */
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function Warp(param = null) {
        isLoggedIn = checkLoggedInOrOut();
        
        if(!param) return console.log(`Parameter null rejected`);
        if(param) {
            console.log(`parameter ${param} recived`);
            
            if(param === "admin") {
                window.location.replace('https://thejakobcraft.xyz/wp-admin')
            } else
            if(param === "auth-azuresession") {
                if(isLoggedIn = false) return window.location.replace('https://thejakobcraft.xyz/?redirect=auth-azuresso');
                
                if(isLoggedIn = true) return window.location.replace('https://thejakobcraft.xyz/?redirect=logout');
            } else
            if(param === "auth-azuresso") {
                if(isLoggedIn = false) return window.location.replace('javascript:submitSamlForm()');
                
                if(isLoggedIn = true) return window.location.replace('https://thejakobcraft.xyz/');
            } else
            if(param === "logout") {
                if(isLoggedIn = false) return window.location.replace('https://thejakobcraft.xyz/');
                
                if(isLoggedIn = true) return window.location.replace('https://thejakobcraft.xyz/wp-login.php?action=logout&redirect_to=https%3A%2F%2Fthejakobcraft.xyz%2F');
            } else
            if(param === "youtube") {
                window.location.replace('https://youtube.com/thejakobcraft');
            } else
            if(param === "twitch") {
                window.location.replace('https://twitch.tv/thejakobcrafttv');
            } else
            if(param === "teamseas") {
                window.location.replace('https://teamseas.org/?team_name=theJakobcraft');   
            } else return window.alert(`Parameter ${param} rejected`);
        };
    }
    
    function PlaceSessionButton(el, obj = 'bigBlue') {
        var bigBlue = `<h2 class="aad_login_text" id="aad_login_text" style="color: #8fffff">Session</h2><button class="aad_login" id="aad_login" onclick="window.location.replace('https://thejakobcraft.xyz/?redirect=auth-azuresession')">aad_login</button>`;
        
        var small = `<div style="margin-right: 0px;cursor: pointer;width: 16px;height: 16px" onclick="window.location.replace('https://thejakobcraft.xyz/?redirect=auth-azuresession')"><i class="far fa-user-circle"></i></div>`
        
        if (obj.toLowerCase() === 'bigblue') $(el).html(bigBlue);
        if (obj.toLowerCase() === 'small') $(el).html(small);
        
        console.log(`placed sessionButton at ${el}!`);
        ReplaceLoginName();
    }
    
    function ReplaceLoginName() {
        let isLoggedIn = checkLoggedInOrOut();
        
        if(isLoggedIn = true) {
            
            // Saml Submit does exist
            // => logged out!
            var LoggedOutHtml = "<b>Log In<br/>Azure AD</b>";
            $("#aad_login").html(LoggedOutHtml);
            
            console.log("aad_login: logged_out");
        };
                
        if(isLoggedIn = false) {
            // Saml Submit doesn't exist
            // => logged in!
            var LoggedInHtml = "<b>Log Out</b>";
            $("#aad_login").html(LoggedInHtml);
            
            console.log("aad_login: logged_in");
        };
    }

function checkLoggedInOrOut() {
    if(typeof submitSamlForm !== 'undefined' && typeof submitSamlForm === 'function') return true;
    if(typeof submitSamlForm === 'undefined' && typeof submitSamlForm !== 'function') return false;
}
