"use strict";const modal=document.getElementById("modal"),modalMain=document.getElementById("modal-main"),modalTitle=document.getElementById("modal-title"),modalContent=document.getElementById("modal-content");let modalPersist=!1;function closeModal(){modalPersist=!1,modal.style.display="none",modalContent.classList.value="",disposeElement(modalContent)}function openModal(t,e){isHidden(modal)&&(setModalTitle(e),modal.style.display="flex",modalData[t]())}function setModalTitle(t){modalTitle.textContent=t}modal.addEventListener("click",(()=>{modalPersist||closeModal()})),modalMain.addEventListener("click",(t=>{t.stopPropagation()}));