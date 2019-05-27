using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CAPIPROJECT.Model
{
    public class Kooi
    {
        public int KooiID { get; set; }
        public double KooiOppervlakte { get; set; }
        public string KooiHabitatsoort { get; set; }
        public string KooiAfscherming { get; set; }
        public string KooiVoeding { get; set; }
        [JsonIgnore]
        public ICollection<Dier> DierenInKooi { get; set; }
    }
}
