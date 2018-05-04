<script>
    $(() => {
        $("send").click(() => {
            var chatMessage = {
                name: $("#txtName").val(), chat: $("#txtMessage").val()
            }
            postChat(chat)
        })
    })
    function postChat(chat){
        console.log(chat)
    }
</script>