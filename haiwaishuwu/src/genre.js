function execute() {
    
    let response = fetch("http://www.haiwaishuwu.com/sort/");
    if (response.ok) {
        let doc = response.html();
        let menu = doc.select(".CGsectionTwo-left a")
        var nav = []
        menu.forEach(e => {
            let c = e.select('a').attr("href");
            if(e.select('a').attr("href").includes("sort/","sort/0/")==false){
                let input = "http://www.haiwaishuwu.com/" + e.select('a').attr("href")
                nav.push({ 
                    title: e.text(), 
                    input: input, 
                    script: "gen.js" 
                    })sort
            }

        })
        return Response.success(nav)
    }

    return null;
}