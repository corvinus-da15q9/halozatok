﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    namespace EmptyBoat.Controllers
    {
        //Commentbe vele!
        //[Route("api/[controller]")]
        [ApiController]
        public class TesztController2 : ControllerBase
        {
            [HttpGet]
            [Route("corvinus/szerverido")]
            public IActionResult M1()
            {
                string pontosIdő = DateTime.Now.ToShortTimeString();

                return new ContentResult
                {
                    ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                    Content = pontosIdő
                };
            }
        }
    }
}
