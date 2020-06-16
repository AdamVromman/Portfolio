import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

let nl = 
{
  "lang":"nl",
  "future":"Toekomst",
  "projects":"Projecten",
  "adam":"Adam",
  "contact":"Contact",

  "internship":"Stage",
  "job":"Job",
  "internshipP1":"Het einde van mijn opleiding nadert. Maar voor ik kan afstuderen, rest mij nog een laatste opdracht. De meest impactvolle, grootste, maar ook spannendste opdracht in dit hoofdstuk van mijn leven. Een stage van drie maanden lang, waarin ik vijf dagen per week meewerk in een bedrijf naast volwaardige developers. En alsof dit allemaal nog niet intens genoeg is, kies ik ervoor om die stage in het buitenland te doen. Er zijn weinig dingen waar ik zo naar uitkijk en zo enthousiast over ben als drie maanden in het buitenland te gaan wonen en werken.",
  "internshipP2":"Ik heb op dit moment nog geen bedrijf gevonden, maar de stage is gepland voor maart 2021, dus ik ben er van overtuigd dat ik tijdig het perfecte bedrijf op de perfecte plek ga vinden. De landen waar ik contacten tracht te leggen zijn IJsland, Noorwegen en Japan. IJsland is een prachtig land dat ik extreem graag zou willen ontdekken. Noorwegen daarentegen heb ik al deels ontdekt, waardoor het vertrouwd en verwelkomend aanvoelt. Japan is een volledig andere cultuur en zou van de drie de meeste aanpassing vereisen. Maar ik ben zeker dat dat het helemaal waard zou zijn.",
  "jobP1":"Aangezien ik nog niet afgestudeerd ben, ben ik nog niet op zoek naar een job. Ik sta wel open voor een vakantie- of studentenjob die te combineren is met mijn studie."
}

let en =
{
  "lang":"en",
  "future":"Future",
  "projects":"Projects",
  "adam":"Adam",
  "contact":"Contact",

  "internship":"Internship",
  "job":"Job",
  "internshipP1":"The end of my studies is nearing. But before I can graduate I have one more task to complete. The most impactful, most exciting and biggest task of this part of my life. A three-month long internship, where I work in a company alongside fully fledged developers. As if that was not intense enough, I choose to do this internship abroad. There are not many things I look forward to more or am as excited about as being able to live and work abroad for three months.",
  "internshipP2":"Currently, I am still searching for the right company, but the internship is planned for march 2021 and I am confident that I will be able to find the perfect organisation in the perfect location in time. The countries where I am looking for opportunities are Iceland, Norway and Japan. Iceland is a beautiful country I would love to discover. I have already discovered parts of Norway which gives it a welcoming and familiar feeling. Japan is an entirely different culture and would require the most adaption. But I am sure it would all be worth it.",
  "jobP1":"As I have not graduated yet, I am currently not looking for a job. I am open for summer internships or student jobs I can combine with my studies."
}



@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public taal: BehaviorSubject<any> = new BehaviorSubject<any>(en);
  public foto: any = document.getElementById(`img`) as HTMLImageElement;
  private _colors = ["ff0000","06ff00","00ffea","fff600","ff00f0"];

  public setImage(url: string)
  {
    if(this.foto != null)
    {
      this.foto.src = url;
    }
    else
    {
      console.log("fuck")
    }
     
  }


  public randomColor(): string
  {
    return `#${this._colors[Math.floor(Math.random() * 4)]}`;
  }


  public addEventListener(id: string)
  {
    try{
      let el = document.getElementById(id);
      el.addEventListener('mouseenter', () => el.style.color = this.randomColor());
      el.addEventListener('mouseout', () => el.style.color = '#000000');
    }
    catch
    {

    }
   
  }

  public changeLang()
  {
    if(this.taal.value["lang"] === 'en')
    {
      this.taal.next(nl);
    }
    else
    {
      this.taal.next(en);
    }
  }
}
