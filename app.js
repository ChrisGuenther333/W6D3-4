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
            <p class="commentUser">` + $('#displayName').val() + `</p>
            <p class="commentText">` + $('#commentText').val() + `</p>
        </div>`);
    }
    else{
        return;
    }
});