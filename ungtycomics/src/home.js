function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://www.ungtycomics.com/truyen-tranh", script: "gen.js"},
        {title: "Truyện hot", input: "https://www.ungtycomics.com/truyen-hot", script: "gen.js"},
        {title: "Đam mỹ", input: "https://www.ungtycomics.com/dam-my.html", script: "gen.js"},
        {title: "Ngôn tình", input: "https://www.ungtycomics.com/ngon-tinh.html", script: "gen.js"},
    ]);
}
