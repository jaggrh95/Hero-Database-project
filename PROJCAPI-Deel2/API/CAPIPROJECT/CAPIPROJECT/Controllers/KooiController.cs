using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAPIPROJECT.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CAPIPROJECT.Controllers
{
    [Route("api/Kooien")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class KooiController : ControllerBase
    {
       public ZooContext _context { get; set; }

        public KooiController(ZooContext ctxt)
        {
            _context = ctxt;
        }
        [HttpGet]

        public IList<Kooi> GetKooien(string Filter, string Parameter, int? page, string Sorteer, int length = 3)
        {
            IQueryable<Kooi> Kooitje = _context.Kooien;

            if (!string.IsNullOrWhiteSpace(Filter))
            {
                switch (Filter)
                {
                    case "Oppervlakte":
                        Kooitje = Kooitje.Where(D => Convert.ToString(D.KooiOppervlakte) == Parameter);
                        break;
                    case "Voeding":
                        Kooitje = Kooitje.Where(D => Convert.ToString(D.KooiVoeding) == Parameter);
                        break;
                    case "Habitat":
                        Kooitje = Kooitje.Where(D => D.KooiHabitatsoort == Parameter);
                        break;
                    case "Omheining":
                        Kooitje = Kooitje.Where(D => D.KooiAfscherming == Parameter);
                        break;
                   

                }

            }
            if (page.HasValue)
            {
                int holder = page.Value * length;
                Kooitje = Kooitje.Skip(holder);
            }

            if (!string.IsNullOrWhiteSpace(Sorteer))
            {
                switch (Sorteer)
                {
                    case "Oppervlakte":
                        Kooitje = Kooitje.OrderBy(D => D.KooiOppervlakte);
                        break;
                    case "Voeding":
                        Kooitje = Kooitje.OrderBy(D => D.KooiVoeding);
                        break;
                    case "Habitat":
                        Kooitje = Kooitje.OrderBy(D => D.KooiHabitatsoort);
                        break;
                    default:
                        Kooitje = Kooitje.OrderBy(D => D.KooiID);
                        break;
                }


            }
            Kooitje = Kooitje.Take(length);

            return Kooitje.ToList();
            
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Kooi> GetKooi(int id)
        {
            var Kooitje = _context.Kooien.Find(id);
            if(Kooitje == null)
            {
                return NotFound();
            }

            return Kooitje;
        }

        [Route("{id}")]
        [HttpDelete]
        [Authorize]

        public ActionResult<Kooi> DeleteKooi(int id)
        {
            var Kooi = _context.Kooien.Find(id);
            if (Kooi == null)
                return NotFound();
            _context.Kooien.Remove(Kooi);
            _context.SaveChanges();
            return NoContent();
        }

        [Route("{id}")]
        [HttpPut]
        public ActionResult<Kooi> UpdateKooi(Kooi d)
        {
            _context.Kooien.Update(d);
            _context.SaveChanges();
            return Created("", d);
        }

     
        [HttpPost]
        [Authorize]

        public ActionResult<Kooi> CreateKooi([FromBody] Kooi d)
        {
            _context.Kooien.Add(d);
            _context.SaveChanges();
            return Created("", d);
        }
        [Route("{id}/dieren")]
        [HttpGet]
        public List<Dier> GetKooiDieren(int id)
        {
            IQueryable<Dier> query = _context.Dieren;

            query = query.Where(D => D.DierKooiId == id);

            return query.ToList();
        }

    }
}