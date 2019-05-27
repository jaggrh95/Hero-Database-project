using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAPIPROJECT.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CAPIPROJECT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DierController : ControllerBase
    {
        public ZooContext _context { get; set; }
        public DierController(ZooContext ctxt)
        {
            _context = ctxt;
        }


        [HttpGet]
        public IList<Dier> GetDierenQuery(string Filter,string Parameter, int? page, string Sorteer, int length = 3)
        {
            IQueryable<Dier> Diertje = _context.Dieren;

            if (!string.IsNullOrWhiteSpace(Filter))
            {
                switch(Filter)
                {
                    case "Naam":
                        Diertje = Diertje.Where(D => D.DierNaam == Parameter);
                        break;
                    case "Voeding":
                        Diertje = Diertje.Where(D => D.DierVoeding == Parameter);
                        break;
                    case "Soort":
                        Diertje = Diertje.Where(D => D.DierSoort == Parameter);
                        break;
                    case "Specifiek soort":
                        Diertje = Diertje.Where(D => Convert.ToString(D.DierSoortSpecifieker) == Parameter);
                        break;
                    case "Kooi":
                        Diertje = Diertje.Where(D =>  Convert.ToString(D.DierKooiId) == Parameter);
                        break;
                }
                
            }

            if (page.HasValue)
            {
                int holder = page.Value* length; 
                Diertje = Diertje.Skip(holder);
            }
            if(!string.IsNullOrWhiteSpace(Sorteer))
            {
                switch (Sorteer)
                {
                    case "Naam":
                        Diertje = Diertje.OrderBy(D => D.DierNaam);
                        break;
                    case "Leeftijd":
                        Diertje = Diertje.OrderBy(D => D.DierLeeftijd);
                        break;
                    case "Gewicht":
                        Diertje = Diertje.OrderBy(D => D.DierGewicht);
                        break;
                    case "Kooi":
                        Diertje = Diertje.OrderBy(D => D.DierKooiId);
                        break;
                    default:
                        Diertje = Diertje.OrderBy(D => D.DierID);
                        break;
                }


            }
            Diertje = Diertje.Take(length);
            return Diertje.ToList();
        }

            
        

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Dier> GetSpecificDier(int id)
        {
            var Diertje = _context.Dieren.Include(D => D.DierKooi)
                .SingleOrDefault(D => D.DierID == id);
            if (Diertje == null)
                return NotFound();
            return Diertje;
        }


      

        //POST

        [HttpPost]
        [Authorize]

        public ActionResult<Dier> AddDier([FromBody] Dier dier)
        {
            _context.Dieren.Add(dier);
            _context.SaveChanges();
            return Created("",dier);
        }

        //DELETE
        [Route("{id}")]
        [HttpDelete]
        [Authorize]
        public ActionResult<Dier> RemoveDier(int id)
        {
            var Diertje = _context.Dieren.Find(id);
            if (Diertje == null)
                return NotFound();
            _context.Dieren.Remove(Diertje);
            _context.SaveChanges();
            return NoContent();
        }

        //UPDATE
        [HttpPut]
        public ActionResult<Dier> UpdateDier([FromBody]Dier dier)
        {
            _context.Dieren.Update(dier);
            _context.SaveChanges();
            return Created("", dier);
        }

        
       
    }
}