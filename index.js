import{a as l,i as u,S as d}from"./assets/vendor-w2JwYdZo.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(a){return l.defaults.baseURL="https://pixabay.com/api/",l.get("",{params:{key:"51584220-5b869931def1029bf82d58339",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>(s.data.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.data)).catch(s=>{throw s})}const c=document.querySelector("ul.gallery");function m(a){const s=a.map(t=>`<li class="gallery-item">
              <a class="gallery-link" href="${t.largeImageURL}">
                  <img 
                      src="${t.webformatURL}" 
                      class="gallery-image" 
                      alt="${t.tags}"
                  />
                  <div class="stats">
                      <ul class="stats-ul">
                          <li class="stats-item">
                              <p class="stats-name">Likes</p>
                              <p class="quantity">${t.likes}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Views</p>
                              <p class="quantity">${t.views}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Comments</p>
                              <p class="quantity">${t.comments}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Downloads</p>
                              <p class="quantity">${t.downloads}</p>
                          </li>
                      </ul>
                  </div>

              </a>
          </li>`).join("");c.innerHTML=s,new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function y(){c.innerHTML=""}function f(){document.querySelector("#loader").classList.remove("hidden")}function n(){document.querySelector("#loader").classList.add("hidden")}const h=document.querySelector(".form"),g=document.querySelector('[type="text"]');document.querySelector('[type="submit"]');h.addEventListener("submit",a=>{a.preventDefault();const s=g.value.trim();if(s===""){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(),y(),p(s).then(t=>{n(),m(t.hits),console.log(t)}).catch(t=>{n(),console.error(t)})});
//# sourceMappingURL=index.js.map
