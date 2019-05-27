using CAPIPROJECT.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CAPIPROJECT
{
    public class DBInit
    {
        public static void Initialize(ZooContext context)
        {
            context.Database.EnsureCreated();

            if(!context.Dieren.Any())
            {
                var admin = new User()
                {
                    UserName = "Admin",
                    Password = "Admin",
                };
                context.Users.Add(admin);


                var Kooi1 = new Kooi()
                {
                    KooiOppervlakte = 32.2,
                    KooiHabitatsoort = "Subtropisch",
                    KooiAfscherming = "Net",
                    KooiVoeding = "Vruchten",
                    
                };
                var Kooi2 = new Kooi()
                {
                    KooiOppervlakte = 16,
                    KooiHabitatsoort = "Artisch",
                    KooiAfscherming = "Glazen muren",
                    KooiVoeding = "Vis",

                };
                var Kooi3 = new Kooi()
                {
                    KooiOppervlakte = 9,
                    KooiHabitatsoort = "Zee",
                    KooiAfscherming = "Aquarium",
                    KooiVoeding = "VisMix",

                };
                var Dier1 = new Dier()
                {
                    DierNaam = "Pengu",
                    DierSoort = "Vogel",
                    DierAfkomst = "Antartica",
                    DierSoortSpecifieker = "penguin",
                    DierGewicht = 20,
                    DierLeeftijd = 8,
                    DierOmschrijving = "Vogel in Water",
                    DierVoeding = "Vis",
                    DierGeslacht = 'M',
                    DierKooi = Kooi2

                };
                var Dier4 = new Dier()
                {
                    DierNaam = "Penga",
                    DierSoort = "Vogel",
                    DierAfkomst = "Artica",
                    DierSoortSpecifieker = "penguin",
                    DierGewicht = 20,
                    DierLeeftijd = 8,
                    DierOmschrijving = "Vogel in zeeWater",
                    DierVoeding = "Vis",
                    DierGeslacht = 'M',
                    DierKooi = Kooi2

                };
                var Dier2 = new Dier()
                {
                    DierNaam = "Tuki",
                    DierSoort = "Vogel",
                    DierAfkomst = "Amazone",
                    DierSoortSpecifieker = "TucanVogel",
                    DierGewicht = 5.5,
                    DierLeeftijd = 4,
                    DierOmschrijving = "Vogel in bos",
                    DierVoeding = "Vruchten",
                    DierGeslacht = 'V',
                    DierKooi = Kooi1

                };
                var Dier3 = new Dier()
                {
                    DierNaam = "Blub",
                    DierSoort = "Vis",
                    DierAfkomst = "Zee",
                    DierSoortSpecifieker = "Goudvis",
                    DierGewicht = 0.5,
                    DierLeeftijd = 4,
                    DierOmschrijving = "Vis in ZoutWater",
                    DierVoeding = "VisMix",
                    DierGeslacht = 'V',
                    DierKooi = Kooi3

                };
                context.Dieren.Add(Dier1);
                context.Dieren.Add(Dier2);
                context.Dieren.Add(Dier3);
                context.Dieren.Add(Dier4);
                context.SaveChanges();

            }
        }

    }
}
