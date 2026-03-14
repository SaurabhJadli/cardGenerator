import { Mail, Phone, MapPin, Cake, IdCardLanyard } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
    return (
        // Company LOGO
        <div className="max-w-5xl mx-auto bg-white text-zinc-800">
            <div className="bg-sky-400 h-14 p-3 card-head-border mb-1">
<img src="/favicon.svg" alt="sas icon" className="mx-auto" />
            </div>
            <div className="text-center">
                <div className="pb-5">
                    {/* Image */}
                    {data.personal_info?.image && typeof data.personal_info.image === 'string' ? (
                        <div>
                            <img src={data.personal_info.image} alt="Profile" className="w-32 h-32 object-cover rounded-full mx-auto" style={{ background: accentColor+'70' }} />
                        </div>
                    ) : (
                        data.personal_info?.image && typeof data.personal_info.image === 'object' ? (
                            <div>
                                <img src={URL.createObjectURL(data.personal_info.image)} alt="Profile" className="w-32 h-32 object-cover rounded-full mx-auto" />
                            </div>
                        ) : null
                    )}
                </div>

                {/* Name + Title */}
                <div className="justify-center  px-8 mb-2">
                    <h1 className="text-3xl font-bold text-zinc-700">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    <p className="text-zinc-600 font-medium text-sm tracking-widest">
                        Course : <span className="uppercase">{data?.personal_info?.course || "Profession"}</span>
                    </p>
                </div>
                <aside className="border-r border-zinc-400 p-6 pt-0">


                    {/* Contacts */}
                    <section className="mb-8 flex"> 
                        <div className="space-y-2 text-sm items-center justify-center mx-auto">
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={14} style={{ color: accentColor }} />
                                    <p className="font-medium">Phone : </p>
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2">
                                    <Mail size={14} style={{ color: accentColor }} />
                                    <p className="font-medium">Email : </p>
                                    <span>{data.personal_info.email}</span>
                                </div>
                            )}
                            
                             {/* DOB */}
                            {data.personal_info?.DOB && (
                                <div className="flex items-center gap-2">
                                    <Cake size={14} style={{ color: accentColor }} />
                                    <p className="font-medium">DOB : </p>
                                    <span>{data.personal_info.DOB}</span>
                                </div>
                            )}
                            {/* ID */}
                            {data.personal_info?.roll_no && (
                                <div className="flex items-center gap-2">
                                    <IdCardLanyard size={14} style={{ color: accentColor }} />
                                    <p className="font-medium">Roll no : </p>
                                    <span>{data.personal_info.roll_no}</span>
                                </div>
                            )}
                            {/* Address */}
                            {data.personal_info?.address && (
                                <div className="flex items-start ">
                                    <MapPin size={14} style={{ color: accentColor }} className="mt-1" />
                                    <div>
                                        <span className="font-medium">Address :</span> {data.personal_info.address}
                                        </div>
                                        </div>
                                    )}
                                    </div>
                                    </section>
                                    </aside>
                                    </div>
                                    </div>
                                    );
                                }

export default MinimalImageTemplate;