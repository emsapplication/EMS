using EMS.BusinessLogicLayer.Operations;
using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;

namespace EMS.ApiService.Controllers
{
    public class ImportResourceDetailController : ApiController
    {
        //private readonly IDesignationBL _iDesignationBL;
        //public ImportResourceDetailController(IDesignationBL iDesignationBL)
        //{
        //    this._iDesignationBL = iDesignationBL;
        //}

        // POST api/values
        public int Post(dynamic value)
        {
            dynamic str = value;
            Example tmp = JsonConvert.DeserializeObject<Example>(value);

            var v = ((Newtonsoft.Json.Linq.JObject)((Newtonsoft.Json.Linq.JContainer)tmp.payload).First);
            var dict = JsonConvert.DeserializeObject<Dictionary<string, object>>(v.ToString());

            var val = (from o in dict
                            where o.Key.Contains("AJ")
                            select o.Key).Last();

            //var val = dict.Keys.Last();

            int lastValue = Convert.ToInt32(Regex.Match(val, @"\d+").Value);


            List<StageResourecDetailBO> oResourSeDetail = new List<StageResourecDetailBO>();


            for (int i = 2; i <= lastValue; i++)
            {
                int j = 1;
                //string A, B = "";
                //foreach (var rec in dict)
                //{

                //    if(j == 37)

                //        break;
                //    }
                //    j++;

                //    var Aconv = JsonConvert.DeserializeObject<A>(rec.Value.ToString());
                //    //if (Aconv.Value as A)
                //    //{
                //        if (rec.Key == "A" + i)
                //        {
                //            A = (Aconv).v;
                //        }
                //        else if (rec.Key == "B" + i)
                //        {
                //            B = (Aconv).v;
                //            break;
                //        }
                //    //}
                //}
                var A = JsonConvert.DeserializeObject<A>(dict["A"+i].ToString());
                var B = JsonConvert.DeserializeObject<A>(dict["B" + i].ToString());
                var C = JsonConvert.DeserializeObject<A>(dict["C" + i].ToString());
                oResourSeDetail.Add(new StageResourecDetailBO { ResourceID = A.v.ToString(), ResourceName = B.v.ToString() });


            }

            //var JsonLoac = ((from o in dict
            //                 where o.Key.Contains("K")
            //                 select JsonConvert.DeserializeObject<A>(o.Value.ToString())).ToList()).Select(o => o.v).Skip(1).Distinct(); ;


            //var Locations = from c in JsonLoac['v']
            //                select c;
            //JContainer is the base class
            // var jObj = (JObject)dict;
            return 1;
        }

        public class Example
        {
            public string result { get; set; }
            public object payload { get; set; }
        }

        public class Payload
        {
            public object a { get; set; }
        }


        public class A
        {
            public string v { get; set; }
            public int ixfe { get; set; }
            public string t { get; set; }
            public string w { get; set; }
        }
    }
}
