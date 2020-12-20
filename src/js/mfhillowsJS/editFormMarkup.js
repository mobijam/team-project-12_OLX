const editFormMarkup = `  <button class="button" data-action="open-edit-modal">Edit call</button>
    <div class="edit-backdrop js-edit-backdrop">
        <div class="edit-modal">
                  <h1 class="edit-title">Редагувати оголошення</h1>

        <form class="edit-modal-form">
          <button type="button" class="button-edit-close" data-action="close-edit-modal">X</button>
            <div class="edit-modal-container">
              <label class="edit-label">Назва товару</label>
                <input class="edit-input title-edit-form" type="text" name="name" />
            </div>
            <div class="edit-modal-container">
              <label class="edit-label">Фотo</label>
                <div class="edit-photos">
                    <input id="formImage" class="edit-photo image-edit-form" name="file" type="file" />
                    <div class="edit-photo-button">+</div>
                    <div id="formPreview" class="file_preview"></div>
                    <input id="formImage" class="edit-photo image-edit-form" name="file" type="file" />
                    <div class="edit-photo-button image-edit-form"></div>
                    <div id="formPreview" class="file_preview"></div>
                    <input id="formImage" class="edit-photo image-edit-form" name="file" type="file" />
                    <div class="edit-photo-button"></div>
                    <div id="formPreview" class="file_preview"></div>
                    <input id="formImage" class="edit-photo image-edit-form" name="file" type="file" />
                    <div class="edit-photo-button"></div>
                    <div id="formPreview" class="file_preview"></div>
                    <input id="formImage" class="edit-photo image-edit-form" name="file" type="file" />
                    <div class="edit-photo-button edit-photo-button-last"></div>
                    <div id="formPreview" class="file_preview"></div>
                </div>
            </div>
            <div class="edit-modal-container">
              <label class="edit-label">Опис товару</label>
                <textarea class="edit-input description-edit-form" name="" type="text"></textarea>
            </div>
            <div class="edit-modal-container">
              <label class="edit-label">Категорія товару</label>
                <select class="edit-category js-category-input edit-input category-edit-form" name="category"
                id="category">
                </select>
            </div>
            <div class="edit-modal-container">
              <label class="edit-label">Ціна</label>
                <input class="edit-input price-edit-form" name="price" type="price" placeholder="0.00 грн"/>
            </div>
            <div class="edit-modal-container">
              <label class="edit-label">Телефон</label>
              <input class="edit-input phone-edit-form" name="tel" type="tel" placeholder="+38(0--)--- -- --"/>
            </div>
            <button type="submit" class="delete-button" data-action="submit-delete-modal">Видалити оголошення</button>
            <div class="buttons-edit"><button type="submit" class="button-edit button-edit-patch" data-action="submit-edit-modal">ЗБЕРЕГТИ</button>
             <button type="button" class="button-edit" data-action="cancel-edit-modal">ВІДМІНА</button><div>
          </form>
        </div>
    </div>`;

const copy = document.querySelector('.copy');
copy.insertAdjacentHTML('beforeend', editFormMarkup);
