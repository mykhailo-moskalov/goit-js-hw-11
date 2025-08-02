import{a as n,i,S as d}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function p(a){return n.defaults.baseURL="https://pixabay.com/api/",n.get("",{params:{key:"51584220-5b869931def1029bf82d58339",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(r.data.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.data)).catch(r=>{throw i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r})}const u=document.querySelector("ul.gallery"),m=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(a){const r=a.map(t=>`<li class="gallery-item">
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
          </li>`).join("");u.innerHTML=r,m.refresh()}function f(){u.innerHTML=""}function h(){document.querySelector("#loader").classList.remove("hidden")}function c(){document.querySelector("#loader").classList.add("hidden")}const g=document.querySelector(".form"),L=document.querySelector('[type="text"]');g.addEventListener("submit",a=>{a.preventDefault();const r=L.value.trim();if(r===""){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(),f(),p(r).then(t=>{c(),y(t.hits),console.log(t)}).catch(t=>{c(),console.error(t)})});
//# sourceMappingURL=index.js.map
