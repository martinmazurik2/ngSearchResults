export class SearchResult {
    title: string ="";
    titleurl: string ="";
    titledatahref: string="";
    cite: string="";
    descr: string="";

    public constructor(init : SearchResult ) {
        this.title = init.title;
        this.titleurl = init.titleurl;
        this.titledatahref = init.titledatahref;
        this.cite = init.cite;
        this.descr = init.descr;
    }
}