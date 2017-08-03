using EMS.BusinessLogicLayer.ServiceContract;
using EMS.BusinessObjects;
using EMS.DataAccessLayer.Operations;
using EMS.DataAccessLayer.ServiceContract;
using System.Collections.Generic;

namespace EMS.BusinessLogicLayer.Operations
{
    public class VerticalsBL : IVerticalsBL
    {
        IVerticalsDA oVerticals;
        public VerticalsBL()
        {
            oVerticals = new VerticalsDA();
        }

        public int AddVerticals(VerticalsBO obj)
        {
            return oVerticals.AddVerticals(obj);
        }

        public int DeleteVerticals(int id)
        {
            return oVerticals.DeleteVerticals(id);
        }

        public List<VerticalsBO> GetAllVerticals()
        {
            return oVerticals.GetAllVerticals();
        }

        public VerticalsBO GetVerticalsById(int id)
        {
            return oVerticals.GetVerticalsById(id);
        }

        public int UpdateVerticals(VerticalsBO obj)
        {
            return oVerticals.UpdateVerticals(obj);
        }
    }
}
