﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Snezhko222
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Бокс.
    /// </summary>
    // *** Start programmer edit section *** (Бокс CustomAttributes)

    // *** End programmer edit section *** (Бокс CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БоксE", new string[] {
            "НомерБокса as \'Номер бокса\'",
            "Площадь as \'Площадь\'",
            "ТипАвтомобиля as \'Тип автомобиля\'"})]
    [View("БоксL", new string[] {
            "НомерБокса as \'Номер бокса\'",
            "Площадь as \'Площадь\'",
            "ТипАвтомобиля as \'Тип автомобиля\'"})]
    public class Бокс : ICSSoft.STORMNET.DataObject
    {
        
        private string fНомерБокса;
        
        private int fПлощадь;
        
        private IIS.Snezhko222.ТипАвтомобиля fТипАвтомобиля;
        
        // *** Start programmer edit section *** (Бокс CustomMembers)

        // *** End programmer edit section *** (Бокс CustomMembers)

        
        /// <summary>
        /// НомерБокса.
        /// </summary>
        // *** Start programmer edit section *** (Бокс.НомерБокса CustomAttributes)

        // *** End programmer edit section *** (Бокс.НомерБокса CustomAttributes)
        [StrLen(255)]
        public virtual string НомерБокса
        {
            get
            {
                // *** Start programmer edit section *** (Бокс.НомерБокса Get start)

                // *** End programmer edit section *** (Бокс.НомерБокса Get start)
                string result = this.fНомерБокса;
                // *** Start programmer edit section *** (Бокс.НомерБокса Get end)

                // *** End programmer edit section *** (Бокс.НомерБокса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бокс.НомерБокса Set start)

                // *** End programmer edit section *** (Бокс.НомерБокса Set start)
                this.fНомерБокса = value;
                // *** Start programmer edit section *** (Бокс.НомерБокса Set end)

                // *** End programmer edit section *** (Бокс.НомерБокса Set end)
            }
        }
        
        /// <summary>
        /// Площадь.
        /// </summary>
        // *** Start programmer edit section *** (Бокс.Площадь CustomAttributes)

        // *** End programmer edit section *** (Бокс.Площадь CustomAttributes)
        public virtual int Площадь
        {
            get
            {
                // *** Start programmer edit section *** (Бокс.Площадь Get start)

                // *** End programmer edit section *** (Бокс.Площадь Get start)
                int result = this.fПлощадь;
                // *** Start programmer edit section *** (Бокс.Площадь Get end)

                // *** End programmer edit section *** (Бокс.Площадь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бокс.Площадь Set start)

                // *** End programmer edit section *** (Бокс.Площадь Set start)
                this.fПлощадь = value;
                // *** Start programmer edit section *** (Бокс.Площадь Set end)

                // *** End programmer edit section *** (Бокс.Площадь Set end)
            }
        }
        
        /// <summary>
        /// ТипАвтомобиля.
        /// </summary>
        // *** Start programmer edit section *** (Бокс.ТипАвтомобиля CustomAttributes)

        // *** End programmer edit section *** (Бокс.ТипАвтомобиля CustomAttributes)
        public virtual IIS.Snezhko222.ТипАвтомобиля ТипАвтомобиля
        {
            get
            {
                // *** Start programmer edit section *** (Бокс.ТипАвтомобиля Get start)

                // *** End programmer edit section *** (Бокс.ТипАвтомобиля Get start)
                IIS.Snezhko222.ТипАвтомобиля result = this.fТипАвтомобиля;
                // *** Start programmer edit section *** (Бокс.ТипАвтомобиля Get end)

                // *** End programmer edit section *** (Бокс.ТипАвтомобиля Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бокс.ТипАвтомобиля Set start)

                // *** End programmer edit section *** (Бокс.ТипАвтомобиля Set start)
                this.fТипАвтомобиля = value;
                // *** Start programmer edit section *** (Бокс.ТипАвтомобиля Set end)

                // *** End programmer edit section *** (Бокс.ТипАвтомобиля Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БоксE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БоксE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БоксE", typeof(IIS.Snezhko222.Бокс));
                }
            }
            
            /// <summary>
            /// "БоксL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БоксL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БоксL", typeof(IIS.Snezhko222.Бокс));
                }
            }
        }
    }
}
