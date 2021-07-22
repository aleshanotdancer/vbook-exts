function execute(url) {
    var doc = Http.get(url).html();
    var html = Http.get("https://www.ungtycomics.com/#comics-chapter" + chapId).string();
    if (html) {
        return Response.success(html);
    }
    return null;
}
