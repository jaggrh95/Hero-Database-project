using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CAPIPROJECT.Model
{
    public class Dier
    {
        public int DierID { get; set; }
        public string DierNaam { get; set; }
        public int DierLeeftijd { get; set; }
        public char DierGeslacht { get; set; }
        public string DierSoort { get; set; }
        public string DierSoortSpecifieker { get; set; }
        public string DierOmschrijving { get; set; }
        public string DierAfkomst { get; set; }
        public double DierGewicht { get; set; }
        public string DierVoeding { get; set; }


        public int DierKooiId { get; set; }
        public Kooi DierKooi { get; set; }
    }
}
