using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OnlineOrder.Controllers
{
    public class SharedController : Controller
    {
        // GET: Errer
        public ActionResult Error()
        {
            return View();
        }
        
        public ActionResult Meals_Model()
        {
            return View();
        }
    }
}