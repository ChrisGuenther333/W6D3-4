function checkFields() {
    if(!$('#displayName').val()) {
        alert('Please enter a Display Name');
    }
    else if(!$('#commentText').val()) {
        alert('Please enter a Comment');
    }
    else {
        return 'checked';
    } 
}

$('#submitButton').on('click', function() {

    if(checkFields() === 'checked') {
        $('.comments').prepend(`<div class="comment">
            <img src="./Images/facebook-profile-blank-face.jpeg" alt="Profile picture"></img>
            <div class="userAndComment">
                <p class="commentUser">` + $('#displayName').val() + `</p>
                <p class="commentText">` + $('#commentText').val() + `</p>
            </div>
            <div class="editAndDelete">
                <input class="editButton" type="button" value="Edit">
                <input class="deleteButton" type="button" value="Delete">
            </div>
        </div>`);

        $('#displayName').val('');
        $('#commentText').val('');
    }
    else{
        return;
    }
});

$('.comments').on('click', '.editButton', function() {
    const comBox = $(this).parents()[1];
    const cBChildren = $(comBox).children()[1];
    const comText = $(cBChildren).children()[1];

    $(this).toggleClass('editVisible')

    if ($(this).hasClass('editVisible')) { 
    $(comBox).append(`
    <div class="editComment">
        <input class="eCText" type="text" value="` + $(comText).text() + `">
        <input class="eCButton" type="button" value="submit">
    </div>`)
    }
    else {
        $('.editComment').css('display', 'none')
        $('.editComment').remove()
    }

});

$('.comments').on('click', '.deleteButton', function() {
    const thisParent = $(this).parents()[1];
    $(thisParent).remove();
});

$('.comments').on('click', '.eCButton', function() {
    const comBox = $(this).parents()[1];
    const cBChildren = $(comBox).children()[1];
    const comText = $(cBChildren).children()[1];

    const eCBox = $(this).parents()[1];
    const eCBChildren = $(eCBox).children()[3];
    const eComText = $(eCBChildren).children()[0];
    
    $(comText).text($(eComText).val());

    const backToEAD = $(comBox).children()[2];
    const backToE = $(backToEAD).children()[0];

    $(backToE).toggleClass('editVisible');
    $(eCBChildren).css('display', 'none')
    $(eCBChildren).remove()






});