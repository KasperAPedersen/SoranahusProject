/*let c = prompt("Denne side er under udvikling", "");
if (c == null || c != "1232") {
    window.location.href = "https://soranahus.dk/";
}*/

let UpdateActiveNavTab = (newActiveTab) => {
    let e = document.getElementsByClassName(newActiveTab);
    for(let i = 0; i < e.length; i++) {
        e[i].classList.add("active");
        e[i].classList.remove("inactive");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("header").innerHTML = `
        <dialog id="mobileModal">
            <article class="header">
                <i class=" mobileModalBackArrow fa fa-angle-left" aria-hidden="true" onclick="changeMobileModal('default')"></i>
                <i class="fa fa-times" aria-hidden="true" onclick="toggleMobileNavigation()"></i>
            </article>
            <nav class="defaultModal mobileNavigationModal">
                <a href="/" class="active headerHome">Hjem</a>
                <p class="inactive headerAbout" onclick="changeMobileModal('staff')">Om Soranahus</p>
                <p class="inactive headerCaseWorkers" onclick="changeMobileModal('forcaseworkers')">For sagsbehandlere</p>
                <p class="inactive headerYoung" onclick="changeMobileModal('fortheyoung')">For den unge</p>
                <a href="/galleri" class="inactive headerGallery">Galleri</a>
                <a href="#contact" class="inactive">Kontakt</a>
            </nav>
            <nav class="staffModal mobileNavigationModal">
                <a class="inactive" href="/om-soranahus#about">Om Soranahus</a>
                <a class="inactive" href="/om-soranahus#frameworks">Fysiske rammer</a>
                <a class="inactive" href="/om-soranahus#staff">Personale</a>
                <a class="inactive" href="/om-soranahus#jobs">Ledige stillinger</a>
            </nav>
            <nav class="forCaseWorkersModal mobileNavigationModal">
                <a class="inactive" href="/for-sagsbehandlere#target">Målgruppe</a>
                <a class="inactive" href="/for-sagsbehandlere#visitation">Visitation</a>
                <a class="inactive" href="/for-sagsbehandlere#methods">Tilgang og metoder</a>
                <a class="inactive" href="/for-sagsbehandlere#familycoop">Familiesamarbejde</a>
                <a class="inactive" href="/for-sagsbehandlere#relations">Relationer</a>
                <a class="inactive" href="/for-sagsbehandlere#health">Kost og sundhed</a>
                <a class="inactive" href="/for-sagsbehandlere#approach">Faglig tilgang og metoder</a>
                <a class="inactive" href="/for-sagsbehandlere#staffDevelopment">Personaleudvikling</a>
                <a class="inactive" href="/for-sagsbehandlere#idDevelopment">Identitetsudvikling</a>
                <a class="inactive" href="/for-sagsbehandlere#crossCoop">Tværfagligt Samarbejde</a>
                <a class="inactive" href="/for-sagsbehandlere#childLaw">Barnets lov</a>
                <a class="inactive" href="/for-sagsbehandlere#pricesandSpots">Ledige pladser</a>
            </nav>
            <nav class="youngModal mobileNavigationModal">
                <a class="inactive" href="/for-den-unge#welcome">Velkommen</a>
                <a class="inactive" href="/for-den-unge#daily">Dagligdagen</a>
                <a class="inactive" href="/for-den-unge#freetime">Fritid</a>
                <a class="inactive" href="/for-den-unge#housing">Egen Bolig</a>
            </nav>
            <section class="socials">
                <div onclick="window.open('https://www.facebook.com/soranahus/', '_blank');"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                <div onclick="window.open('https://www.instagram.com/soranahus/', '_blank');"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                <div onclick="window.open('https://www.linkedin.com/organization-guest/company/soranahus', '_blank');"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
            </section>
        </dialog>
        <header>
            <section class="logo">
                <img src="inc/images/logo_tekst.svg" alt="Soranahus logo" />
            </section>
             <nav>
                <a href="/" class="inactive headerHome">Hjem</a>
                 <div class="dropdown">
                     <a href="/om-soranahus" class="inactive dropbtn headerAbout">Om Soranahus</a>
                     <div class="dropdown-content">
                         <a href="/om-soranahus#about">Om Soranahus</a>
                         <a href="/om-soranahus#frameworks">Fysiske rammer</a>
                         <a href="/om-soranahus#staff">Personale</a>
                         <a href="/om-soranahus#jobs">Ledige stillinger</a>
                     </div>
                 </div>
                 <div class="dropdown">
                     <a href="/for-sagsbehandlere" class="inactive headerCaseWorkers">For sagsbehandlere</a>
                     <div class="dropdown-content">
                         <a href="/for-sagsbehandlere#target">Målgruppe</a>
                         <a href="/for-sagsbehandlere#visitation">Visitation</a>
                         <a href="/for-sagsbehandlere#methods">Tilgang og metoder</a>
                         <a href="/for-sagsbehandlere#familycoop">Familiesamarbejde</a>
                         <a href="/for-sagsbehandlere#relations">Relationer</a>
                         <a href="/for-sagsbehandlere#health">Kost og sundhed</a>
                         <a href="/for-sagsbehandlere#approach">Faglig tilgang og metoder</a>
                         <a href="/for-sagsbehandlere#staffDevelopment">Personaleudvikling</a>
                         <a href="/for-sagsbehandlere#idDevelopment">Identitetsudvikling</a>
                         <a href="/for-sagsbehandlere#crossCoop">Tværfagligt Samarbejde</a>
                         <a href="/for-sagsbehandlere#childLaw">Barnets lov</a>
                         <a href="/for-sagsbehandlere#pricesandSpots">Ledige pladser</a>
                     </div>
                 </div>
                <div class="dropdown">
                     <a href="/for-den-unge" class="inactive headerTheYoung">For den unge</a>
                     <div class="dropdown-content">
                        <a href="/for-den-unge#welcome">Velkommen</a>
                        <a href="/for-den-unge#daily">Dagligdagen</a>
                        <a href="/for-den-unge#freetime">Fritid</a>
                        <a href="/for-den-unge#housing">Egen Bolig</a>
                     </div>
                 </div>
                <a href="/galleri" class="inactive headerGallery">Galleri</a>
                <a href="#contact" class="inactive">Kontakt</a>
            </nav>
            <section class="socials">
                <div onclick="window.open('https://www.facebook.com/soranahus/', '_blank');"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                <div onclick="window.open('https://www.instagram.com/soranahus/', '_blank');"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                <div onclick="window.open('https://www.linkedin.com/organization-guest/company/soranahus', '_blank');"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
            </section>
            <section id="mobileIcon" class="socials">
                <div><i class="fa fa-bars" aria-hidden="true" onclick="toggleMobileNavigation()"></i></div>
            </section>
        </header>`;
});