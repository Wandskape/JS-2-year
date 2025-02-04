class Film{
    constructor(public id:number, public name:string, public imgSrc:string, public year:string, public type:string) {
    }
}

class Base{
    public movies:Film[] = [];
    public cartoons:Film[] = [];
    public series:Film[] = [];
    public all:Film[] = [];

    addMovies(name:string, imgSrc:string, year:string):void{
        this.movies.push(new Film(this.movies.length + 1, name, imgSrc, year, "movie"));
    }
    addCartoons(name:string, imgSrc:string, year:string):void{
        this.cartoons.push(new Film(this.cartoons.length + 1, name, imgSrc, year, "cartoon"));
    }
    addSeries(name:string, imgSrc:string, year:string):void{
        this.series.push(new Film(this.series.length + 1, name, imgSrc, year, "series"));
    }

    addMovies1(name:string, imgSrc:string, year:string):void{
        this.all.push(new Film(this.all.length + 1, name, imgSrc, year, "movie"));
    }
    addCartoons1(name:string, imgSrc:string, year:string):void{
        this.all.push(new Film(this.all.length + 1, name, imgSrc, year, "cartoon"));
    }
    addSeries1(name:string, imgSrc:string, year:string):void{
        this.all.push(new Film(this.all.length + 1, name, imgSrc, year, "series"));
    }

    init(){
        this.addMovies("Зелёный слоник","https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5c3243ed-0180-4984-8236-94f1d6210f38/orig", "1999")
        this.addMovies("Drive", "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/edd48c8f-120e-4cb0-bf62-67f8b78a7b67/orig", "2011")
        this.addMovies("Бойцовский клуб", "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/ed5f8af5-a6f0-4ec3-80bd-8380351bf722/orig", "1999")
        this.addMovies("Бойцовский клуб", "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b90d5495-3bf7-405e-8267-7946d2888618/orig", "1999")
        this.addMovies("Бегущий в лабиринте", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a9f239ff-4506-417b-acd6-e5e3c142c06e/orig", "2014")
        this.addMovies("Робокоп", "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ce7776ed-cc13-4f2d-862e-2527b211b1af/orig", "1987")

        this.addCartoons("Зверополис", "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/04c7f833-cf04-4411-8888-18a00171f858/orig", "2016")
        this.addCartoons("Шрэк", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ef98d170-1128-4057-895a-f3cbaf2cf775/orig", "2001")
        this.addCartoons("Рататуй", "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/3891b677-dfdd-4dd4-8327-74e6a7a62e72/orig", "2007")
        this.addCartoons("Как приручить дракона", "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/2abdd90a-241b-41a3-8f2c-4fe988188c05/orig", "2010")
        this.addCartoons("Мадагаскар", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/94a73775-759b-41b8-a6d4-084032879ed1/orig", "2005")
        this.addCartoons("Ледниковый период", "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/8ada067e-92cc-4ed5-a63e-d963ab129e5b/orig", "2002")

        this.addSeries("Во все тяжкие", "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9e6cdd4b-090a-4a61-a507-2d3bb0433481/orig", "2008-2013")
        this.addSeries("Игра престолов", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/3dd1ba5f-e610-459d-82dd-eee4eeb151ae/orig", "2011-2019")
        this.addSeries("Офис", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b6d11d72-ee64-4319-b9bb-bf39cf78f841/orig", "2005–2013")
        this.addSeries("Сопрано", "https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/5719f17f-d490-41fe-90dd-adb2f02ac682/orig", "1999–2007")
        this.addSeries("Тед Лассо", "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4e02e368-d5d0-409f-a941-74c39e5db22f/orig", "2020-2023")
        this.addSeries("Семнадцать мгновений весны", "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/14494746-8c93-44f9-8dec-d40010f20525/orig", "1973")

        this.addMovies1("Зелёный слоник","https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5c3243ed-0180-4984-8236-94f1d6210f38/orig", "1999")
        this.addMovies1("Drive", "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/edd48c8f-120e-4cb0-bf62-67f8b78a7b67/orig", "2011")
        this.addMovies1("Бойцовский клуб", "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/ed5f8af5-a6f0-4ec3-80bd-8380351bf722/orig", "1999")
        this.addMovies1("Бойцовский клуб", "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b90d5495-3bf7-405e-8267-7946d2888618/orig", "1999")
        this.addMovies1("Бегущий в лабиринте", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a9f239ff-4506-417b-acd6-e5e3c142c06e/orig", "2014")
        this.addMovies1("Робокоп", "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ce7776ed-cc13-4f2d-862e-2527b211b1af/orig", "1987")

        this.addCartoons1("Зверополис", "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/04c7f833-cf04-4411-8888-18a00171f858/orig", "2016")
        this.addCartoons1("Шрэк", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ef98d170-1128-4057-895a-f3cbaf2cf775/orig", "2001")
        this.addCartoons1("Рататуй", "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/3891b677-dfdd-4dd4-8327-74e6a7a62e72/orig", "2007")
        this.addCartoons1("Как приручить дракона", "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/2abdd90a-241b-41a3-8f2c-4fe988188c05/orig", "2010")
        this.addCartoons1("Мадагаскар", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/94a73775-759b-41b8-a6d4-084032879ed1/orig", "2005")
        this.addCartoons1("Ледниковый период", "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/8ada067e-92cc-4ed5-a63e-d963ab129e5b/orig", "2002")

        this.addSeries1("Во все тяжкие", "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9e6cdd4b-090a-4a61-a507-2d3bb0433481/orig", "2008-2013")
        this.addSeries1("Игра престолов", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/3dd1ba5f-e610-459d-82dd-eee4eeb151ae/orig", "2011-2019")
        this.addSeries1("Офис", "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b6d11d72-ee64-4319-b9bb-bf39cf78f841/orig", "2005–2013")
        this.addSeries1("Сопрано", "https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/5719f17f-d490-41fe-90dd-adb2f02ac682/orig", "1999–2007")
        this.addSeries1("Тед Лассо", "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4e02e368-d5d0-409f-a941-74c39e5db22f/orig", "2020-2023")
        this.addSeries1("Семнадцать мгновений весны", "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/14494746-8c93-44f9-8dec-d40010f20525/orig", "1973")

    }

}



export {Base, Film};