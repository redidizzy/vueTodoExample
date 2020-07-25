$(function(){
    $("#addElement").click(function(){
        var newValue = $("#newElement").val();
        var newElement = "<li>"+newValue+" <button class='deleteElement'>x</button></li>";
        var list = $("ul#list");
        list.append($(newElement));
        var titleValue = $("#listTitle").text();
        $("#listTitle").text("TODO("+$("#list").children().length+")");
    });
    $("body").on("click", ".deleteElement", function(){
        $(this).parent().remove();
        $("#listTitle").text($("#listTitle").text()-1);
        var listCount = $("#list").children().length;
        if(listCount > 0){
            $("#listTitle").text("TODO("+listCount+")");
        }else{
            $("#listTitle").text("");
        }
        
    });
})